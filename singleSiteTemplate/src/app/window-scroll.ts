export class WindowScrolling {

    private styleTag: HTMLStyleElement;


    constructor() {
    this.styleTag = this.buildStyleElement();
    }


    public disable(): void {
    document.body.appendChild( this.styleTag );
    }


    public enable(): void {
    document.body.removeChild( this.styleTag );
    }


    private buildStyleElement(): HTMLStyleElement {
        const style = document.createElement( 'style' );

        style.type = 'text/css';
        style.setAttribute( 'data-debug', 'Injected by WindowScrolling service.' );
        style.textContent = `
            @media screen and (max-width: 600px) {
                body {
                    overflow: hidden !important ;
                }
            }

            @media only screen and (min-width: 600px) and (max-width: 991px) and (max-height: 650px) {
                body {
                    overflow: hidden !important ;
                }
            }
            `;
    return( style );
    }

}
