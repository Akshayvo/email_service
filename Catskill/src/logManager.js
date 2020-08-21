(function cpLog () {
  console.log ('cpLog -> login message from IIFE');
  const logMe = (message = 'Dummy') => {
    console.log('Message', message );
  }
  window.logMe = logMe;
})();
