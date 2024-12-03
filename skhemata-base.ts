import { SkhemataBase } from './src/SkhemataBase.js';

if(!customElements.get('skhemata-base')) {
    window.customElements.define('skhemata-base', SkhemataBase);
}
