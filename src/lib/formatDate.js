export function formatDate(dateString) {
  if(dateString.includes(":00Z")) {
    return new Date(dateString).toLocaleDateString('en-EN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    });
  } else {
    return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-EN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    });
  }
}

function formatYear (dateString) {
  if(dateString.includes(":00Z")) {
    return new Date(dateString).toLocaleDateString('en-EN', {
      year: 'numeric',
      timeZone: 'UTC',
    });
  } else {
    return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-EN', {
      year: 'numeric',
      timeZone: 'UTC',
    });
  }
}

function formatMonthYear (dateString) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-EN', {
    year: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  });
}

function formatStandardDate(dateString) {
  if(!dateString.includes(":00Z")) {
    return dateString+'T00:00:00Z';
  } else {
    return dateString;
  }
}

export {
  formatYear,
  formatMonthYear,
  formatStandardDate
};

