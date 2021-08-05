import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { Skhemata } from '@skhemata/skhemata-api-client-js';
import { Bulma } from '@skhemata/skhemata-css';

export class SkhemataBase extends ScopedElementsMixin(LitElement) {
  /**
   * Skhemata API URL
   */
  @property({ type: Object, attribute: 'api' })
  api: {
    url: string;
  } = {
    url: '',
  };

  /**
   * Translations directory
   */
  @property({ type: String, attribute: 'translation-dir' })
  translationDir = '';

  /**
   * Translations object
   */
  @property({ type: Object, attribute: 'translation-data' })
  translationData: any;

  /**
   * Language code (ISO)
   */
  @property({ type: String, attribute: 'translation-lang' })
  translationLang = 'eng';

  /**
   * Selected Translation
   */
  @property({ type: Object, attribute: false })
  translationSelected: any;

  /**
   * Skhemata SDK
   */
  @property({ type: Object, attribute: false })
  skhemata?: Skhemata;

  /**
   * path to Configuration File
   */
  @property({ type: String, attribute: 'config-src' })
  configSrc = '';

  /**
   * Configuration Data
   */
  @property({ type: Object, attribute: 'config-data' })
  configData: any;

  static styles = [Bulma];

  /* TODO: add validation and form error handling
  validateFormInputs(){
  }

  displayAPIFormErrors(){
  } */

  attributeChangedCallback(name: any, oldVal: any, newVal: any) {
    if (name === 'translation-lang') {
      this.translationSelected = this.translationData[this.translationLang];
    }
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  /**
   * getStr
   * @param key key for translation
   * @returns translated string
   */
  getStr(key: string) {
    try {
      const value = key
        .split('.')
        .reduce((o, i) => o[i], this.translationSelected);
      return typeof value === 'string' ? value : key;
    } catch {
      return key;
    }
  }

  async firstUpdated() {
    if (this.api?.url) {
      this.initSkhemataAPI();
    }

    if (this.configSrc) {
      // await in case subclass firstUpdated() depends on config data
      await this.initConfigData();
    }

    if (this.translationDir || this.translationData) {
      this.initTranslations();
    }

    this.initEventListeners();

    this.requestUpdate();
  }

  initSkhemataAPI(){
    this.skhemata = new Skhemata(this.api.url);
    this.skhemata.init();
  }

  async initConfigData(){
    this.configData = await fetch(this.configSrc).then(res => res.json());
  }

  initTranslations(){
    if (this.translationDir) {
      fetch(`${this.translationDir}${this.translationLang}.json`).then(
        res => {
          this.translationSelected = res.json();
        }
      );
    } else {
      this.translationSelected = this.translationData[this.translationLang];
    }
  }

  initEventListeners(){
    window.addEventListener('skhemata-login', () => {
      this.requestUpdate();
    });
    window.addEventListener('skhemata-logout', () => {
      this.requestUpdate();
    });
  }
}
