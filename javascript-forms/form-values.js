
const $form = document.getElementById('contact-form');

$form.addEventListener('submit', getFormValues);

function getFormValues(event) {
  event.preventDefault();
  var fullName = $form.elements.name.value;
  var emailAddress = $form.elements.email.value;
  var msg = $form.elements.message.value;

  var newObj = {
    name: fullName,
    email: emailAddress,
    message: msg
  };

  console.log('messageData: ', newObj);
  document.getElementById('contact-form').reset();

}
