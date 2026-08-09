import { IContact, IEvent } from "./interface";
import { getEventsNextAction, getEventsPastAction } from "./store";

export const CURRENT_DATE = new Date(2024, 3, 8);

export const allFaculties = ['ФКП', 'ФИТУ', 'ИЭФ', 'ФКСИС', 'ФИБ', 'ФРЭ', 'ВФ'];
export const allEventsTypes = ['Культурные', 'Образовательные', 'Спортивные'];
export const allEventsVisits = ['Свободный вход', 'С регистрацией'];

export const contacts: IContact[] = [
  {
    name: 'ФКП',
    inst: 'https://www.instagram.com/fcad_bsuir',
    telegram: 'https://t.me/fcad_bsuir'
  },
  {
    name: 'ФКСИС',
    inst: 'https://www.instagram.com/fksis',
    telegram: 'https://t.me/fcsan_by'
  },
  {
    name: 'ФИТУ',
    inst: 'https://www.instagram.com/fitu_bsuir',
    telegram: 'https://t.me/fitu_bsuir'
  },
  {
    name: 'ФИБ',
    inst: 'https://www.instagram.com/fis_bsuir',
    telegram: 'https://t.me/fis_bsuir'
  },
  {
    name: 'ИЭФ',
    inst: 'https://www.instagram.com/ief_bsuir',
    telegram: 'https://t.me/ief_bsuir'
  },
  {
    name: 'ФРЭ',
    inst: 'https://www.instagram.com/fre_bsuir',
    telegram: 'https://t.me/fre_bsuir1'
  },
  {
    name: 'ВФ',
    inst: 'https://www.instagram.com/vf_bsuir',
    telegram: 'https://t.me/vfbsuir'
  }
]

// заглушка для ts. Данные из объекта не будет использоваться
export const eventPlug: IEvent =  {
  id: 0,
  photo: '',
  title: '',
  date: CURRENT_DATE,
  time: '',
  location: '',
  faculties: [],
  description: '',
  archive: '',
  results: '',
  type: allEventsTypes[0],
  visit: allEventsVisits[0],
  page: 'next'
}

export const formatDate = (dateString: Date) => {
  const months = [
    "января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"
  ];
  const date = new Date(dateString);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return `${day} ${months[monthIndex]} ${year}`;
}

export const ActionGetEvents = {
  next: getEventsNextAction(),
  past: getEventsPastAction(),
};

export const showScrollBar = () => {
  document.body.style.overflowY = 'auto';
  document.body.style.padding = '0';
}

export const hiddenScrollBar = () => {
  document.body.style.overflowY = 'hidden';
  document.body.style.padding = '0 17px 0 0';
}