import Ember from 'ember'
const {Controller} = Ember

export default Controller.extend({

  actions: {
    onBlurHandler () {
      this.notifications.addNotification({
        message: 'blur event',
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    },

    onInputHandler (attrs) {
      console.log('password value: ' + attrs.value)
      this.notifications.addNotification({
        message: "value: '" + attrs.value + "'",
        type: 'success',
        autoClear: true,
        clearDuration: 2000
      })
    }
  }
})
