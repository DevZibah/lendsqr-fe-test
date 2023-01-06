import React, { useState, useEffect, Fragment } from 'react'

const App = () => {
  const [formData, setFormData] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    async function fetchFormData() {
      const response = await fetch(
        `https://api.storyblok.com/v2/cdn/stories/home?cv=1672872222&token=4afhXtFu4hfjnr5x5QJ3UQtt&version=published`
      )
      const data = await response.json()
      setFormData([data])
      setLoading(false)
    }
    fetchFormData()
  }, [])

  const data = formData.map((item) => {
    return item.story.content.body[2].fields
  })
  console.log(data[0])

  const onSubmit = (e) => {
    e.preventDefault()
    var url =
      'https://api.storyblok.com/v2/cdn/stories/home?cv=1672872222&token=4afhXtFu4hfjnr5x5QJ3UQtt&version=published'
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Management-API-Token': '4afhXtFu4hfjnr5x5QJ3UQtt',
      },
      body: JSON.stringify(data[0]),
    })
      .then((response) => {
        window.alert('profile created successfully')
        setErrors(true)
      })
      .catch(function (error) {
        console.log('ERROR:', error)
      })
  }
  return (
    <div>
      {loading === false && (
        <Fragment>
          {data[0].map((item, key) => {
            return (
              <div key={key}>
                <form action={onSubmit}>
                  <div className='form-group'>
                    <label htmlFor={item.name}>{item.label}</label>
                    <input
                      type={item.type}
                      className='form-control'
                      placeholder={item.placeholder}
                      id={item.name}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-describedby='emailHelp'
                    />
                  </div>
                </form>
              </div>
            )
          })}
          <div>
            <input type='submit' value='Get Started' />
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default App
