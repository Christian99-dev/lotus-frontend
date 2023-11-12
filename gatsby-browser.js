export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Diese Seite ist eine alte Version.  ` +
      `Neuladen um die aktuelle Version zu sehen?`
  );

  if (answer === true) {
    window.location.reload();
  }
};
