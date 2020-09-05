import { reactive, readonly, onMounted } from 'vue'

const fetchResource = async ({url, onStart, onLoading, onSuccess, onError}) => {
  try {
    onLoading(true)
    onStart()
    onError(null)

    const response = await fetch(url)
    const jsonResponse = await response.json()

    onSuccess(jsonResponse)
  } catch (err) {
    onError(err)
  } finally {
    onLoading(false)
  }
}

export const useFetch = (url) => {
  const state = reactive({
    response: null,
    loading: true,
    error: null
  })

  onMounted(() => {
    fetchResource({
      url,
      onStart: () => state.response = null,
      onLoading: (val) => state.loading = val,
      onSuccess: (val) => state.response = val,
      onError: (val) => state.error = val
    })
  })

  return readonly(state)
}
