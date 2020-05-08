export default {
  name: 'd2admin',
  icon: './lib/UEditor/button-icon/d2admin.png',
  tip: 'D2Admin',
  handler: (editor, name) => {
    editor.execCommand('inserthtml', '<p><span style="border: 1px solid rgb(0, 0, 0); font-family: impact, chicago; color: rgb(127, 127, 127);">https://github.com/d2-projects/</span><span style="border: 1px solid rgb(0, 0, 0); font-family: impact, chicago; background-color: rgb(23, 54, 93); color: rgb(255, 255, 255);">d2-admin</span></p>')
  }
}
