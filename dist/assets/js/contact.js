const topicDetails = {
  events: {
    title: 'Event details',
    fields: [
      { name: 'eventType', label: 'Event type', type: 'select', options: ['Wedding', 'Birthday', 'Corporate event', 'Celebration', 'Other'] },
      { name: 'eventDate', label: 'Event date', type: 'date' },
      { name: 'eventLocation', label: 'Event location', type: 'text', placeholder: 'City or venue' },
      { name: 'guestCount', label: 'Estimated guest count', type: 'number', min: 1, placeholder: 'e.g. 80' },
      { name: 'eventBudget', label: 'Estimated budget', type: 'text', placeholder: 'Optional range' },
      { name: 'eventNotes', label: 'Tell us about the event', type: 'textarea', wide: true, placeholder: 'Style, services, or anything else we should know' }
    ]
  },
  desserts: {
    title: 'Dessert details',
    fields: [
      { name: 'dessertType', label: 'What are you looking for?', type: 'select', options: ['Celebration cake', 'Wedding cake', 'Dessert table', 'Other desserts'] },
      { name: 'dessertFlavor', label: 'Preferred flavor', type: 'text', placeholder: 'e.g. chocolate, vanilla, fruit' },
      { name: 'dessertSize', label: 'Cake size', type: 'select', options: ['Small', 'Medium', 'Large', 'Not sure yet'] },
      { name: 'servings', label: 'Approximate servings', type: 'number', min: 1, placeholder: 'e.g. 20' },
      { name: 'dessertDate', label: 'Date needed', type: 'date' },
      { name: 'dessertNotes', label: 'Design or dietary notes', type: 'textarea', wide: true, placeholder: 'Share inspiration, dietary needs, or other details' }
    ]
  },
  apparels: {
    title: 'Apparel details',
    fields: [
      { name: 'apparelCategory', label: 'Item category', type: 'select', options: ['Clothing', 'Shoes', 'Handbags', 'Accessories', 'Other'] },
      { name: 'apparelItem', label: 'Item or style', type: 'text', placeholder: 'Describe the item you are interested in' },
      { name: 'apparelSize', label: 'Preferred size', type: 'text', placeholder: 'Size or measurements' },
      { name: 'apparelQuantity', label: 'Quantity', type: 'number', min: 1, placeholder: '1' },
      { name: 'apparelBudget', label: 'Estimated budget', type: 'text', placeholder: 'Optional range' },
      { name: 'apparelNotes', label: 'Additional details', type: 'textarea', wide: true, placeholder: 'Color, fit, occasion, or other preferences' }
    ]
  }
};

const contactTopic = document.getElementById('contactTopic');
const topicFields = document.getElementById('topicFields');
const topicFieldsTitle = document.getElementById('topicFieldsTitle');
const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');

function createTopicField(field, topic) {
  const label = document.createElement('label');
  const id = `contact-${topic}-${field.name}`;
  label.className = `contact-field${field.wide ? ' contact-field-wide' : ''}`;
  label.htmlFor = id;

  const labelText = document.createElement('span');
  labelText.textContent = field.label;
  label.append(labelText);

  let control;
  if (field.type === 'select') {
    control = document.createElement('select');
    const placeholder = document.createElement('option');
    placeholder.value = '';
    placeholder.textContent = 'Select an option';
    control.append(placeholder);
    field.options.forEach((optionText) => {
      const option = document.createElement('option');
      option.value = optionText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      option.textContent = optionText;
      control.append(option);
    });
  } else if (field.type === 'textarea') {
    control = document.createElement('textarea');
    control.rows = 4;
  } else {
    control = document.createElement('input');
    control.type = field.type;
    if (field.min !== undefined) control.min = String(field.min);
  }

  control.id = id;
  control.name = field.name;
  control.autocomplete = 'off';
  if (field.placeholder) control.placeholder = field.placeholder;
  label.append(control);
  return label;
}

function renderTopicFields() {
  const topic = contactTopic.value;
  const details = topicDetails[topic];
  if (!details) throw new Error(`Unknown inquiry topic: ${topic}`);

  topicFieldsTitle.textContent = details.title;
  topicFields.replaceChildren(...details.fields.map((field) => createTopicField(field, topic)));
  contactStatus.textContent = '';
}

const requestedTopic = new URLSearchParams(window.location.search).get('topic');
if (requestedTopic && Object.hasOwn(topicDetails, requestedTopic)) {
  contactTopic.value = requestedTopic;
}
renderTopicFields();

contactTopic.addEventListener('change', renderTopicFields);
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  contactStatus.textContent = `Your ${contactTopic.options[contactTopic.selectedIndex].text} inquiry preview is ready. This UI test did not send or save your entries.`;
});
