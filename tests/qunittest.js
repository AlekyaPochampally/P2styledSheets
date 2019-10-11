QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST Calculate_Area', assert => {
  assert.equal(Calculate_Area(1, 1), 1, 'Positive integers')
  assert.equal(Calculate_Area(-1, -1), 1, 'Negative integers')
  assert.equal(Calculate_Area(-10, 10), -100, 'Mixed')
  assert.equal(Calculate_Area(0, 0), 0, 'Null')
  assert.equal(Calculate_Area(0.5, 2.1), 1.05, 'Float')
})

QUnit.config.autostart = false  // sync = false; start after loading html

function Calculate_Area(s1,s2){
    return s1*s2
}
window.addEventListener('load', () => {
  const appURL = '../index.html'
  const openingTag = '<main class="container mt-5 flex-fill">'
  const closingTag = '</main>'
  fetch(appURL, { method: 'GET' })
    .then(response => {
      return response.text() // returns promise
    })
    .then(txt => {
      const start = txt.indexOf(openingTag)
      const end = txt.indexOf(closingTag) + closingTag.length
      const html = txt.substring(start, end)
      const qunitFixtureBody = document.getElementById('qunit-fixture')
      qunitFixtureBody.innerHTML = html
      console.info(qunitFixtureBody)
      QUnit.start()
    })
    .catch(error => {
      console.error('error:', error);
      QUnit.start()
    })
})

QUnit.test("TEST first number validation", assert => {
  const input = document.querySelector('#firstNumber')
  const warning = document.querySelector('#firstWarning')
  input.value = -3;
  assert.equal(input.value, -3, "Bad value assigned")
  assert.strictEqual(input.checkValidity(), false, "Correctly fails validation")
  input.focus()
  input.blur()
  assert.strictEqual(warning.innerHTML, 'Invalid input', `Correctly adds warning ${warning}`)
})
