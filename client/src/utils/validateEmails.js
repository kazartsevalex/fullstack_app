export default (emails) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const emailsArray = emails.split(',');
  let invalidEmails = [];
  emailsArray.forEach(email => {
    const em = email.trim();
    if (em !== '') {
      invalidEmails.push(em);
    }
  });
  invalidEmails = invalidEmails.filter(email => re.test(email) === false);

  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }
};
