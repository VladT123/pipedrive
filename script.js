// Function to save input information to Pipedrive
function saveToPipedrive() {
  // Get the input values
  var name = document.getElementById('name').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var zip = document.getElementById('zip').value;
  var area = document.getElementById('area').value;
  var type = document.getElementById('type').value;
  var source = document.getElementById('source').value;
  var description = document.getElementById('description').value;
  var date_start = document.getElementById('date_start').value;
  var time_start = document.getElementById('time_start').value;
  var time_end = document.getElementById('time_end').value;
  var test = document.getElementById('test').value;

  var deal = {
    title: name + ' ' + lastName,
    '4d49f04354912882f28586c8c1467ce9fcac665d': email,
    '874be9685d0b361c91065b6e0ebebd2e3a75175a': phone,
    'd3d07a8689c6fa804e7a29aa40264e6a28b43dff': address,
    'c93091a327027ef1899cd2cf6e275a542ee2c1e2': city,
    'cc00392cb2312ac1d1b43b5e628b31be966e1327': state,
    '0fb870153d14bebf34f7538e63d823d02cf65ba1': zip,
    'd3c195e9c64c8d73677c330447f1d6bd432baa23': area,
    '54b0173f92c8238eeb5f066c20e2fa5a4b4fcf26': type,
    '163995f98cae33d508bc7faa65bc9a5db75fd307': source,
    'd94a27ad89a00be1a32f0951c9d854245e0b6ed6': description,
    '6bd7107affc8e8afed6a3f68cc4c419bedad0688': date_start,
    '15d48a077868787869dfac469a5473c62a22e633': time_start,
    '99b5c2cb575a54f27b1fae40d86df29621aae867': time_end,
    '2e9081fc73a5e0c1fd58c8421520e3b085f57559': test,
  };
  
  // Make the API call to create a deal in Pipedrive
  fetch('https://api.pipedrive.com/v1/deals?api_token=b456bf50d406e681c18523095f97228b8b60c065', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(deal)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Deal created:', data);
    // Handle the response as needed
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle errors
  });
}
