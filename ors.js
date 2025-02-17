function prettifyJson(json) {
  let response = JSON.stringify(json, null, '\t')
  response = response.replace(/(\n)/g, '<br>')
  return response.replace(/(\t)/g, '&nbsp;&nbsp;')
}
window.onload = async function() {
          const node = document.getElementById('directions')

          const orsDirections = new Openrouteservice.Directions({
            api_key: '5b3ce3597851110001cf6248c9047c74e71e450ea5779ab25da783fe'
          })

          try {
            const json = await orsDirections.calculate({
              coordinates: [[77.6331, 12.9716], [88.0123, 22.5726]],
              profile: 'driving-car',
              extra_info: ['waytype', 'steepness'],
              format: 'json',
              api_version: 'v2'
            })
            // Add your own result handling here
            console.log(json)
            let response = prettifyJson(json)
            node.innerHTML = '<h3>Response</h3><p>' + response + '</p>'
          } catch (err) {
            console.error(err)
            let response = prettifyJson(err)
            node.innerHTML = '<h3>Error</h3><p>' + response + '</p>'
          }
        }