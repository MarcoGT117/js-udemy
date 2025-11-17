/* 
        https://developer.mozilla.org/es/docs/Web/API/Window/mathcMedia

        mql = window.matchMedia(mediaQueryString);
        mql viene de media query list, que es el objeto que se crea con el metodo matchMedia().
        mediaQueryString es cualquier media query valida en css
        */

        const mql = matchMedia('(min-width:480px)'); //Es importante dejar los parentesis dentro del string

        const applyMatchMedia = mql => {
                        //Hacer este tipo de codig escribira el estilo como estilo en linea en el HTML, por lo que es mejor evitarlo  
            mql.matches ? document.body.style.backgroundColor = 'red' :  document.body.style.backgroundColor = 'royalblue'
        }

        addEventListener('resize', applyMatchMedia(mql));
        addEventListener('DOMContentLoaded', applyMatchMedia(mql));