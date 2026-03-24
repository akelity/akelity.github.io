import {isValidUrl} from "@/lib/utils";

function generateEvent (data) {

    let pageContent = data.workPerformed.map(t => {
        let resourceLink = isValidUrl(t.contentUrl)
            ? `<a href="${t.contentUrl}" target="_blank" rel="noopener noreferrer" class="your-link-class">Visit Resource</a>`
            : '';

        return `<b>${t.name}</b>
        <br />${t.description}
        <br />
        <br />
        ${resourceLink}
        `
    }).join('<br /><br />');

    let organizerInfo = isValidUrl(data.organizer.url)
        ? `Organized by <a href="${data.organizer.url}" target="_blank" rel="noopener noreferrer">${data.organizer.name}</a>`
        : `Organized by ${data.organizer.name}`;

    pageContent += `<br /><br /><br />${organizerInfo}`;
    return pageContent;
}

export {
    generateEvent
};
