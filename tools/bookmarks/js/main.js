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
    bookmarksLink      = '.bookmarks-form__link',
    bookmarksInfoBox   = '.bookmarks-form__info-box',
    clearStorage       = el('.clear-storage');


bookmarksForm.addEventListener('submit',  function(e) {
  let bookmarksUrlValue   = bookmarksUrl.value,
      bookmarksNameValue  = bookmarksName.value,
      bookmarksInfoForm = '<div class="bookmarks-form__info-box"></div>';
  
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
             <a href="#" class="btn btn-success btn-auto bookmarks-form__edit">Edit</a>\
             <a href="#" class="btn btn-warning btn-auto bookmarks-form__remove">Delete</a>\
        </div>'
        +
      '</li>';
    
      bookmarksUrl.classList.remove('error');
      bookmarksName.classList.remove('error');
      bookmarksForm.reset();
    
      if (!localStorage.getItem('setBookmarks') !== null) {
        bookmarksReady.children[0].hidden = true;
      }
    
  } else {
    bookmarksUrl.classList.add('error');
    bookmarksName.classList.add('error');
  }
  
  storage();
  e.preventDefault();
  
}, false);

// Storage
function storage() {
  window.localStorage.setBookmarks = bookmarksReady.innerHTML;
}

// First View
function getValues() {
    var storedValues = window.localStorage.setBookmarks;
    if(!storedValues) {
      bookmarksReady.innerHTML = '<li>Make your first bookmark :)</li>';
    }
    else {
      bookmarksReady.innerHTML = storedValues;
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
  </div>';


bookmarksReady.addEventListener('click', function(e) {
  var target = e.target,
      urlValue = target.closest('li').querySelector(bookmarksEditUrl),
      nameValue = target.closest('li').querySelector(bookmarksEditName),
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
      id('bookmarks-form__edit-url').value = linkUrl;
      id('bookmarks-form__edit-name').value = linkName;
    }

    e.preventDefault();
  } else if ( target.classList.contains(bookmarksSave.slice(1)) ) {

    btnCancel.classList.remove('btn-secondary');
    btnCancel.classList.add('btn-success');
    btnCancel.textContent = 'Edit';
    
    target.closest('.row-edit').remove();
    linkWay.setAttribute('href', urlValue.value);
    linkWay.innerHTML = nameValue.value + '<em class="favicon"></em>';
    linkWay.children[0].style.backgroundImage = 'url("http://www.google.com/s2/favicons?domain=' + urlValue.value + '")';

    e.preventDefault();

  } else if ( target.classList.contains(bookmarksInfoBtn.slice(1)) ) {

    e.preventDefault();
  } else {}
  
  
  storage();
});


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


