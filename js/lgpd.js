let lgpdUrl = 'https://jsonplaceholder.typicode.com/posts';
let lgpdHtml = ' <div class="lgpd"> <div class="row "> <div class="col col-sm-12 col-lg-11 blockquote-footer">Este site pode utilizar cookies devido a integrações com API´s ao continuar navegando está de acordo. Para mais informações acesse <a href="ecothermosolar.com/privacy" target="_blank" rel="privacidade">politica de privacidade</a> </div> <p class="d-sm-block d-md-block d-lg-none"></p> <div class="col col-md-11 col-lg-1 text-end"> <button class="btn btn-light btn-sm">Ok</button> </div></div> </div>';

let lsContent = localStorage.getItem('lgpd');
if(!lsContent){
    document.body.innerHTML += lgpdHtml;

    let lgpdArea = document.querySelector('.lgpd');
    let lgpdBtn = lgpdArea.querySelector('button');

    lgpdBtn.addEventListener('click', async()=>{
        lgpdArea.remove();
        let result = await fetch(lgpdUrl);
        let json = await result.json();

        if(json.error != ''){
            let id = '123';
            localStorage.setItem('lgpd', id);
        }
    });
}