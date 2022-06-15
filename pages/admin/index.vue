<template>
  <PostsList :posts="posts"/>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Carpet on the floor',
          descr: 'I enjoy relaxing on the couch especially when there is a carpet on the floor',
          img: 'https://images.unsplash.com/photo-1655071516487-03bb9267b1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
        },
        {
          id: 2,
          title: 'Fresh fruits',
          descr: "It's a sunny summer day today. Nice time to eat some fresh berries",
          img: 'https://images.unsplash.com/photo-1655241459367-c95abd34d0bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
        },
        {
          id: 3,
          title: 'Lovely place',
          descr: 'Last week I visited such a lovely place! Look at it!',
          img: 'https://images.unsplash.com/photo-1655132664647-9c45ab161269?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=680&q=80'
        }
      ]
    }
  }
}
</script>
