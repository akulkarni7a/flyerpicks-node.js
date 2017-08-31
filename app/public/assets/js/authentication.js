var lock = new Auth0Lock(
  'JrIxW1xGSeBijyLpGptK2cmaVWIzIpHW',
  'flyerpicks.auth0.com'
);

lock.on("authenticated", function(authResult) {
  // Use the token in authResult to getUserInfo() and save it to localStorage
  lock.getUserInfo(authResult.accessToken, function(error, profile) {
    if (error) {
      // Handle error
      return;
    }

    document.getElementById('nick').textContent = profile.nickname;

    localStorage.setItem('accessToken', authResult.accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));
  });
});

document.getElementById('btn-login').addEventListener('click', function() {
  lock.show();
});