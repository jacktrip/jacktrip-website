

// function ValidateEmail(inputText) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (inputText.value.match(mailformat)) {
//         console.log('true');
//         // var oReq = new XMLHttpRequest();
//         // oReq.open("POST", "https://api.hubapi.com/crm/v3/properties/objectType?archived=false&hapikey=d43af0f7-185d-480f-b8e6-7058052cedf3", true);
//         // oReq.onload = function(oEvent) {
//         //     if (oReq.status == 200) {
//         //         console("Uploaded!");
//         //     } else {
//         //         console("Declined!");
//         //     }
//         // };
//         document.emaildata.Email.focus();
//         document.emaildata.Name.focus();
//         document.emaildata.Company.focus();
//         return true;
//     } else {
//         // alert("You have entered an invalid email address!");
//         console.log('false');
//         return false;
//     }
// }


// your form
var form = document.querySelector('#MYFORM');

// attach event listener
form.addEventListener('submit', submitForm, true);

function submitForm(evt) {
  evt.preventDefault();
  console.log("submitForm");

  // Create the new request
  var xhr = new XMLHttpRequest();
  var url =
    'https://api.hsforms.com/submissions/v3/integration/submit/8327526/d43af0f7-185d-480f-b8e6-7058052cedf3';

  let date = new Date();
  let time = date.getTime();

  var data = {
    submittedAt: time,
    fields: [
      {
        name: 'Email',
        value: document.querySelector('#exampleEmailInput').value,
      },
      {
        name: 'Name',
        value: document.querySelector('#fname').value,
      },
      {
        name: 'Associated Company',
        value: document.querySelector('#cname').value,
      },
    ],
  };

  // Uncomment this if it doesn't work without having the legalConsentOptions
  /* data.legalConsentOptions = {
    // Include this object when GDPR options are enabled
    consent: {
      consentToProcess: true,
      text:
        'I agree to allow Example Company to store and process my personal data.',
      communications: [
        {
          value: true,
          subscriptionTypeId: 999,
          text:
            'I agree to receive marketing communications from Example Company.',
        },
      ],
    },
  } */

  var final_data = JSON.stringify(data);

  xhr.open('POST', url);
  // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      alert(xhr.responseText); // Returns a 200 response if the submission is successful.
    } else if (xhr.readyState == 4 && xhr.status == 400) {
      alert(xhr.responseText); // Returns a 400 error the submission is rejected.
    } else if (xhr.readyState == 4 && xhr.status == 403) {
      alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.
    } else if (xhr.readyState == 4 && xhr.status == 404) {
      alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found
    }
  };

  // Sends the request
  xhr.send(final_data);
}
