let survey_options = document.querySelector('.survey_options');
let add = document.getElementById('add_fields');
let remove = document.getElementById('remove_field');

add.onclick = function() {
  let field = document.createElement('input');
  let tags =   survey_options.getElementsByTagName('input');
  field.setAttribute('type','text');
  field.setAttribute('name','survey_options');
  field.setAttribute('class', 'survey_options');
  field.setAttribute('size', '50');
  survey_options.appendChild(field);
  if (tags.length >= 2) {
    document.getElementById('remove_field').style.visibility='visible';
  }
}

remove.onclick = function() {
  let tags = survey_options.getElementsByTagName('input');
  if (tags.length >= 2) {
   survey_options.removeChild(tags[tags.length -1]);
   if (tags.length < 2) {
    document.getElementById('remove_remove_field').style.visibility='hidden';
  }
  } 
}
