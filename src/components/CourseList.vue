<template>
<ul class="dashboard__courses">
  <li v-for="(course, index) in courses" :key="index" class="dashboard__course card"
  :class="{new: course.isNew}">
    <div class="card__content">
      <h3>{{course.title + (5 - index)}}<span>{{course.messages}}</span></h3>
      <p>{{course.description + index}}</p>
      <strong>{{course.last + index}}</strong>
    </div>

    <ul class="dashboard__course__files">
      <li v-for="(file, index) in course.files" :key="index" class="dashboard__course__file">
        {{file.name + index}}<a :href="file.link"></a></li>
    </ul>

    <a href="" class="card__link"></a>
  </li>
</ul>
</template>

<script>
export default {
  name: 'courselist',
  props: {

  },
  data() {
    return {
      courses: [
        {
          title: 'Course Title Number ',
          description: 'Course Description Number ',
          last: 'Zuletzt aktualisiert am 23. Mai 201',
          messages: '2 ungelesene Nachrichten',
          isNew: true,
          files: [
            {
              name: 'lineare-gleichungssysteme.pdf',
              type: 'pdf',
              link: '',
            },
            {
              name: 'skalarprodukte.pdf',
              type: 'pdf',
              link: '',
            },
            {
              name: 'eigenwerte.pdf',
              type: 'pdf',
              link: '',
            },
          ],
        },
        {
          title: 'Course Title Number ',
          description: 'Course Description Number ',
          last: 'Zuletzt aktualisiert am 23. Mai 201',
          messages: '',
          isNew: false,
          files: [
            {
              name: 'lineare-gleichungssysteme.pdf',
              type: 'pdf',
              link: '',
            },
            {
              name: 'skalarprodukte.pdf',
              type: 'pdf',
              link: '',
            },
            {
              name: 'eigenwerte.pdf',
              type: 'pdf',
              link: '',
            },
          ],
        },
        {
          title: 'Course Title Number ',
          description: 'Course Description Number ',
          last: 'Zuletzt aktualisiert am 23. Mai 201',
          messages: '',
          isNew: false,
          files: [
          ],
        },
      ],
    };
  },
};
</script>

<style>

</style>
