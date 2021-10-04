document.addEventListener('DOMContentLoaded', function () {

    // const caption = document.querySelectorAll('.caption'),
    //       listItem = document.querySelectorAll('.list'),
    //       itemImage = document.querySelectorAll('.pic')

    // const hideCaption = (a) => {
    //     for (let i = 0; i < caption.length; i++) {
    //         caption[i].classList.remove('show_caption');
    //         caption[i].classList.add('hide_caption');
    //     }
    // }
    

    // const showCaption = (a) => {
    //     if (caption[a].classList.contains('hide_caption')) {
    //         caption[a].classList.remove('hide_caption');
    //         caption[a].classList.add('show_caption');
    //     }
    // }
    // hideCaption();

    // listItem.forEach(function (item) {
        
    //     item.addEventListener('mouseover', (e) => {
            
    //         e.preventDefault();
        
    //         let target = e.target;
            
            
            
            
    //         if (target && (target.classList.contains('experience-project__part-react-list__item-image') || target.classList.contains('experience-project__part-native-list__item-image'))) {
    //             for (let i = 0; i < itemImage.length; i++) {
    //                 if (target == itemImage[i]) {
    //                     hideCaption(i);
    //                     showCaption(i);
    //                     break;
    //                 }
    //             }
    //         }
    //     })
    //     item.addEventListener('mouseout', (e) => {
    //         for (let i = 0; i < caption.length; i++) {
    //         let relatedTarget = e.relatedTarget;
    //         if (relatedTarget == relatedTarget.classList.contains('show_caption')) {
    //             console.log(i);
    //             hideCaption(i);
    //         }
    //     }
    //     })
    // })


let currentElem = null;

const ul = document.querySelector('.experience-project__part-react-list');

ul.onmouseover = function(event) {
    if (currentElem) return;
    let target = event.target.closest('div');

    if(!target) return;

    if (!ul.contains(target)) return;

    currentElem = target;
    target.closest('div').style.visibility = 'visible';
    // target.classList.add('show_caption');
};

ul.onmouseout = function(event) {
    if (!currentElem) return;
    let relatedTarget = event.relatedTarget;
    while (relatedTarget) {
        if (relatedTarget == currentElem) return;

        relatedTarget = relatedTarget.parentNode;
    }
    
    // currentElem.classList.remove('show_caption');
    // currentElem.classList.add('hide_caption');
    currentElem.style.visibility = 'hidden';
    currentElem = null;
  };


});