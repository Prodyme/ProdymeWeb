<template>
  <section>
    <p>CMS test</p>
  </section>
</template>

<script>
var butter = require('buttercms')('0c4edbcfbe38f7f95b447f4008e365d0e4009d0a');
butter.page.retrieve('*', 'simple-page').then(response => console.log(response.data))
let payload = {
  "title": "Frequently Asked Questions",
  "slug": "faq",
  "page-type": "questions",
  "fields": {
    "en": {
      "headline": "Frequently Asked Questions",
      "body": "<p class=\"content\">We love questions</p>",
      "questions": [{
        "question": "Are dogs allowed?",
        "answer": "Leashed dogs are allowed.",
        "picture": "https://farm1.staticflickr.com/836/42903355654_8faa21171a_m_d.jpg"
      }],
    }
  }
}

fetch('https://api.buttercms.com/v2/pages/', {
  method: 'POST',
  headers: {
    "Authorization": "0c4edbcfbe38f7f95b447f4008e365d0e4009d0a",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
})
    .then(json => console.log(json))
    .catch(err => console.log("Request Failed", err));
</script>

<style>

</style>