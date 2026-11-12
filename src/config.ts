export const SITE = {
  name: 'Road Consult',
  legalName: 'MC Compas Road Consult SRL',
  url: 'https://roadconsult.ro',
  description:
    'Road Consult, Marghita: măsurători topografice și trasări, planificarea și coordonarea lucrărilor de drumuri și consultanță tehnică.',
  phoneDisplay: '0742 198 484',
  phoneIntl: '+40742198484',
  whatsapp: 'https://wa.me/40742198484',
  email: 'contact@roadconsult.ro',
  cui: '37757050',
  reg: 'J5/1580/2017',
  caen: '7112',
  founded: '2017',
  address: {
    street: 'Str. Tineretului 8',
    city: 'Marghita',
    postalCode: '415300',
    region: 'Bihor',
    country: 'RO',
  },
  geo: { lat: 47.35, lng: 22.3333 },
  facebook: 'https://www.facebook.com/roadconsult',
  linkedin: 'https://www.linkedin.com/company/roadconsult',
  // Free key from https://web3forms.com, created for contact@roadconsult.ro. Forms send once this is set.
  web3formsKey: '',
};

export const ADDRESS_LINE = [SITE.address.street, SITE.address.city, SITE.address.region]
  .filter(Boolean)
  .join(', ');
