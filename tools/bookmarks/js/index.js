// Variables
var el = document.querySelector.bind(document),
    bookmarksForm      = id('bookmarks-form__box'),
    bookmarksUrl       = id('bookmarks-form__url'),
    bookmarksName      = id('bookmarks-form__name'),
    bookmarksInfo      = id('bookmarks-form__info'),
    bookmarksReady     = id('bookmarks-form__ready'),
    bookmarksRemove    = '.bookmarks-form__remove',
    bookmarksEdit      = '.bookmarks-form__edit',
    bookmarksInfoBtn   = '.bookmarks-form__info',
    bookmarksSave      = '.bookmarks-form__save',
    bookmarksEditUrl   = '#bookmarks-form__edit-url',
    bookmarksEditName  = '#bookmarks-form__edit-name',
    bookmarksEditInfo  = '#bookmarks-form__edit-info',
    bookmarksLink      = '.bookmarks-form__link',
    bookmarksInfoBox   = '.bookmarks-form__info-box',
    clearStorage       = el('.clear-storage'),
    formSearch         = id('bookmarks-form__search'),
    formSearchBox      = el('.bookmarks-form__search-box');


bookmarksForm.addEventListener('submit',  function(e) {
  let bookmarksUrlValue   = bookmarksUrl.value,
      bookmarksNameValue  = bookmarksName.value,
      bookmarksInfoValue  = bookmarksInfo.value,
      infoCheck           = el(bookmarksInfoBtn),
      bookmarksInfoForm   = '\
        <div class="bookmarks-form__info-box">'
        + bookmarksInfoValue +
        '</div>';
  
  if ( bookmarksUrlValue && bookmarksNameValue !== '' ) {

    
    
    bookmarksReady.innerHTML += '\
      <li>\
        <div class="btn-group">\
          <a href="' + bookmarksUrlValue + '" class="btn btn-primary btn-expand '
            + bookmarksLink.slice(1) +
            '" target="_blank">'
            + bookmarksNameValue +
            '<em class="favicon" style="background-image: url(http://www.google.com/s2/favicons?domain='
            + bookmarksUrlValue +
            ')"></em></a>\
             <a href="#" class="btn btn-info btn-auto bookmarks-form__info">Info</a>\
             <a href="#" class="btn btn-success btn-auto bookmarks-form__edit">Edit</a>\
             <a href="#" class="btn btn-warning btn-auto bookmarks-form__remove">Delete</a>\
        </div>'
        + bookmarksInfoForm +
      '</li>';
    
    
    
    
    
      // + bookmarksInfoForm +
      // let currentInfoBox = document.querySelectorAll(bookmarksInfoBox);
      // alert('this is = ' + currentInfoBox);
    
      // currentInfoBox.hidden = true;
      // currentInfoBox.style.backgroundColor = 'red';
      
      // currentInfoBox.innerHTML = 'test';
      // currentInfoBox.innerHTML = bookmarksInfoValue;
    
      bookmarksUrl.classList.remove('error');
      bookmarksName.classList.remove('error');
      bookmarksForm.reset();
    
      if (!localStorage.getItem('setBookmarks') !== null) {
        bookmarksReady.children[0].hidden = true;
      }
    
      searchReset();
    
  } else {
    bookmarksUrl.classList.add('error');
    bookmarksName.classList.add('error');
  }
    
  // if (!localStorage.getItem('setBookmarks') !== null) {
  //   bookmarksReady.children[0].hidden = true;
  // }
  
  // infoCheck.style.display = 'none';
  
  storage();
  e.preventDefault();
  
}, false);



function infoTest() {
  // var ttttt = document.getElementsByClassName('bookmarks-form__info-box');
  var ttttt = document.querySelectorAll('.bookmarks-form__info-box');
  ttttt.hidden = true;
  // ttttt.style.backgroundColor = 'red';
  ttttt[0].textContent = 'red';
}
// infoTest();




// Storage
function storage() {
  window.localStorage.setBookmarks = bookmarksReady.innerHTML;
}

// First View
function getValues() {
    var storedValues = window.localStorage.setBookmarks;
    if(!storedValues) {
      bookmarksReady.innerHTML = '<li>Make your first bookmark :)</li>';
      formSearchBox.hidden = true;
    }
    else {
      bookmarksReady.innerHTML = storedValues;
      formSearchBox.hidden = false;
    }
}
getValues();



//------------------------------------ Navigation Bookmark
var bookmarksEditForm = '\
  <div class="row row-edit row-small">\
    <div class="column xs-5 sm-5">\
        <input class="fffff" type="text" placeholder="Site URL" id="bookmarks-form__edit-url">\
    </div>\
    <div class="column xs-5 sm-5">\
        <input class="fffff" type="text" placeholder="Site Name" id="bookmarks-form__edit-name">\
    </div>\
    <div class="column xs-2 sm-2">\
        <a href="#" class="btn btn-primary btn-block bookmarks-form__save">save</a>\
    </div>\
    <div class="column xs-12 sm-12">\
        <textarea placeholder="Site Info" id="bookmarks-form__edit-info"></textarea>\
    </div>\
  </div>';



bookmarksReady.addEventListener('click', function(e) {
  var target = e.target,
      urlValue = target.closest('li').querySelector(bookmarksEditUrl),
      nameValue = target.closest('li').querySelector(bookmarksEditName),
      infoValue = target.closest('li').querySelector(bookmarksEditInfo),
      linkWay = target.closest('li').querySelector(bookmarksLink),
      infoBox = target.closest('li').querySelector(bookmarksInfoBox),
      linkMenu = target.closest('li').querySelector('.btn-group'),
      btnCancel = target.closest('li').querySelector('.btn-secondary'),
      linkUrl = linkWay.getAttribute('href'),
      linkName = linkWay.textContent;
  
  if ( target.classList.contains(bookmarksRemove.slice(1)) ) {
    target.closest('li').remove();
    e.preventDefault();
  } else if ( target.classList.contains(bookmarksEdit.slice(1)) ) {
    // target.parentNode.hidden = true;
    if ( target.classList.contains('btn-secondary') ) {
      target.classList.remove('btn-secondary');
      target.classList.add('btn-success');
      target.textContent = 'Edit';
      target.closest('li').querySelector('.row-edit').remove();
    } else {
      target.textContent = 'Cancel';
      target.classList.remove('btn-success');
      target.classList.add('btn-secondary');
      target.closest('li').innerHTML += bookmarksEditForm;
      
      // el('.row-edit').remove();
      
      id('bookmarks-form__edit-url').value = linkUrl;
      id('bookmarks-form__edit-name').value = linkName;
      id(bookmarksEditInfo.slice(1)).value = infoBox.innerHTML;
      // alert( id('bookmarks-form__edit-info').value );
      // urlValue.hidden = true;
      // urlValue.classList.add('btn-secondary');
      // nameValue.value = 'TEST';
      // alert(123);
      // nameValue.hidden =  true;
      
    }
    
    
    
    
    
    
    // urlValue.setAttribute('data-test', 'test-value');
    
    
    
    
    
    
    e.preventDefault();
  } else if ( target.classList.contains(bookmarksSave.slice(1)) ) {
    
    btnCancel.classList.remove('btn-secondary');
    btnCancel.classList.add('btn-success');
    btnCancel.textContent = 'Edit';
    
    target.closest('.row-edit').remove();
    // linkMenu.hidden = false;
    linkWay.setAttribute('href', urlValue.value);
    linkWay.innerHTML = nameValue.value + '<em class="favicon"></em>';
    linkWay.children[0].style.backgroundImage = 'url("http://www.google.com/s2/favicons?domain=' + urlValue.value + '")';
    infoBox.innerHTML = infoValue.value;
    
    // window.getComputedStyle(linkWay, ':before').setProperty('border', '10px solid red');
    
    
    e.preventDefault();
    

    // alert(urlValue + nameValue)
  } else if ( target.classList.contains(bookmarksInfoBtn.slice(1)) ) {
    
    infoBox.classList.toggle('active');
    // alert(123);
    e.preventDefault();
  } else {}
    
  storage();
});




// Search Bookmarks

// formSearch.value = 'sss';


function searchReset() {
  
  if (formSearch.value == '') {
    // setTimeout(function() {
    var bookmarksRow = bookmarksReady.getElementsByTagName('li');
    for (var i = 0; i < bookmarksRow.length; i++) {
      bookmarksRow[i].hidden = false;
      bookmarksRow[0].hidden = true;
    }
    // }, 3000);
  } else {}
  
};
// searchReset();







formSearch.addEventListener('input', function(e) {
  var formValue = formSearch.value,
      bookmarks = bookmarksReady.getElementsByClassName(bookmarksLink.slice(1)),
      amount  = bookmarks.length;

  
  // var re = new RegExp('*' + word + '*');

  // if (re.test(div[i].innerText || div[i].textContent)) {
    // div[i] contains /*word*/
  // } 
  
  // var textOriginal = bookmarks.textContent;
  var regExp = new RegExp(formValue == '\\' ? '' : formValue, 'gi');
  // var textNew = textOriginal;
          
    for (var i = 0; i < amount; i++) {
      if (!regExp.test(bookmarks[i].innerText || bookmarks[i].textContent)) {
        bookmarks[i].closest('li').hidden = true;
      } else {
        bookmarks[i].closest('li').hidden = false;
      }
    }
  
 
  
  
  
  
  
  
  
  
  
  
//     var resets = bookmarksReady.getElementsByTagName('li'),
//         shows =  resets.length;
        
//     resets.hidden = false;
  
//     for (var j = 0; j < shows; j++) {
//       // alert(j + ' item');
//       j.hidden = false;
//     }
  
  
  
  
  
    // for (var i = 0; i < amount; i++) {
    //   if (formValue != bookmarks[i].textContent && formValue != '') {
    //     bookmarks[i].closest('li').hidden = true;
    //   } else {
    //     bookmarks[i].closest('li').hidden = false;
    //   }
    // }

});












// formSearch.value = '111';
// formSearch.value = '';

// storage();




var resets = bookmarksReady.getElementsByTagName('li');
// resets[7].style.backgroundColor = 'red';
// resets.hidden = false;
// alert(resets.length);







//------------------------------------------------- Search OLD

// // Search Bookmarks
// var formSearch = id('bookmarks-form__search'),
//     searchResult = id('bookmarks-form__search-result');

// formSearch.addEventListener('input', function(e) {
//   var formValue    = formSearch.value,
//       currentBase  = bookmarksReady.innerHTML;
      
//       // linkWay = target.closest('li').querySelector(bookmarksLink),
//       // linkName = linkWay.textContent;
  
  
//   // bookmarksReady.innerHTML = formValue;

//   if ( formValue.length >= 1 ) {
//     bookmarksReady.hidden = true;
//     searchResult.innerHTML = currentBase;
    
//     // searchResult.children[1].style.paddingTop = '50px';
    
//     // ******************************************************************
//     // *********** REMOVE searchResult and add Class for Hide Buttons !!!
//     // ******************************************************************
    
    
    
    
//     // searchResult.innerHTML = searchResult.innerHTML.replace(
//     //   new RegExp('(' + formValue + ')', 'gi'),
//     //   '<span class="highlight">$1</span>'
//     // );
    
    
//     searchResult.hidden = false;
//   } else {
//     bookmarksReady.hidden = false;
//     searchResult.hidden = true;
//     searchResult.innerHTML = '';
//   }
  
  
  
//   // document.write(currentBase);
  
//   // bookmarksReady.innerHTML = bookmarksReady.textContent.replace(
//   //   new RegExp('(' + formValue + ')', 'gi'),
//   //   '<span class="highlight">$1</span>'
//   // );
  
// });

//--------------------------------------------- Search OLD END




// Clear Storage
clearStorage.onclick = function(e) {
  let target = e.target;
  if ( target.classList.contains('active') ) {
    target.classList.remove('active', 'btn-warning');
    target.classList.add('btn-secondary');
    target.textContent = 'Clear Storage';
    window.localStorage.clear();
  } else {
    target.classList.remove('btn-secondary');
    target.classList.add('active', 'btn-warning');
    target.textContent = 'Are you sure ?';
  }
  e.preventDefault();
}

function id(id_name) {
  return document.getElementById(id_name);
}


// Get Favicons
    // http://www.google.com/s2/favicons?domain=
    // http://favicon.yandex.net/favicon/com.com/google.com