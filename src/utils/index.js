const getInitialData = () => ([
  {
    id: 1,
    title: 'Babel',
    body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
    color: 'red',
  },
  {
    id: 2,
    title: 'Functional Component',
    body: 'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
    color: 'orange',
  },
  {
    id: 3,
    title: 'Modularization',
    body: 'Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
    color: 'green',
  },
  {
    id: 4,
    title: 'Lifecycle',
    body: 'Dalam konteks React component, lifecycle merupakan kumpulan method yang menjadi siklus hidup mulai dari component dibuat (constructor), dicetak (render), pasca-cetak (componentDidMount), dan sebagainya. ',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
    color: 'blue',
  },
  {
    id: 5,
    title: 'ESM',
    body: 'ESM (ECMAScript Module) merupakan format modularisasi standar JavaScript.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
    color: 'purple',
  },
  {
    id: 6,
    title: 'Module Bundler',
    body: 'Dalam konteks pemrograman JavaScript, module bundler merupakan tools yang digunakan untuk menggabungkan seluruh modul JavaScript yang digunakan oleh aplikasi menjadi satu berkas.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
    color: 'red',
  },
]);

const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('id-ID', options);
};

const getNoteColorClassName = (color) => {
  const noteColorClassName = {
    orange: 'bg-orange-note-color',
    red: 'bg-red-note-color',
    green: 'bg-green-note-color',
    blue: 'bg-blue-note-color',
    purple: 'bg-purple-note-color',
  };

  return noteColorClassName[color];
};

const getFilteredNotes = (notes, keyword) => {
  const upperCaseKeyword = keyword.toUpperCase();
  const filteredNotes = notes.filter((note) => (
    note.title.toUpperCase().indexOf(upperCaseKeyword) > -1
    || note.body.toUpperCase().indexOf(upperCaseKeyword) > -1));

  return filteredNotes;
};

export {
  getInitialData, showFormattedDate, getNoteColorClassName, getFilteredNotes,
};
