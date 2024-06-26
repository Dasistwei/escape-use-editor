// /add the toolbar options
const myToolbar = [
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'align': [] }],
  ['link', 'image'],

  ['clean']
]

function imageHandler() {
  const range = this.quill.getSelection();
  const value = prompt('please copy paste the image url here.');
  if (value) {
    this.quill.insertEmbed(range.index, 'image', value, Quill.sources.USER);
  }
}

const quill = new Quill('#editor', {
  theme: 'snow',
  placeholder: '寫下產品描述',
  modules: {
    imageResize: {
      displaySize: true
    },
    toolbar: {
      container: myToolbar,
      handlers: {
        image: imageHandler
      }
    }
  },
});