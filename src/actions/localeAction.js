/**
 * Created by devollove9 on 2017/10/21.
 */

const changeLocaleAction = ( activeLocale ) => ({
  type: 'CHANGE_LOCALE' , data: activeLocale
})

export const onChangeLocale = ( activeLocale ) => async ( dispatch , getState ) => {
  try {
    await dispatch( changeLocaleAction( activeLocale ) )
  } catch (error) {
    console.log('error: ', error)
  }
}

const getLocaleAction =() =>({
  type:'GET_LOCALE'
})

export const onGetLocale = () => async ( dispatch , getState ) => {
  try {
    await dispatch( getLocaleAction() )
  } catch (error) {
    console.log('error: ', error)
  }
}

const updateLocaleAction = ( locales ) => ({
  type: 'UPDATE_LOCALE' , data: locales
})

export const onUpdateLocale = ( locales ) => async ( dispatch , getState ) => {
  try {
    await dispatch( updateLocaleAction( locales ) )
  } catch (error) {
    console.log('error: ', error)
  }
}


const getActiveLocaleAction =() =>({
  type:'GET_ACTIVE_LOCALE'
})

export const onGetActiveLocale = () => async ( dispatch , getState ) => {
  try {
    await dispatch( getActiveLocaleAction() )
  } catch (error) {
    console.log('error: ', error)
  }
}
