  let postIndex = 0;
  let $posts = $('#ig_posts .post');

  function appendPosts(num) {
      let $waterfall = $('#waterfall');
      for (let i = 0; i < num; i++) {
          let $post = $posts.eq(postIndex).clone();
          $waterfall.append($post);
          postIndex = (postIndex + 1) % $posts.length; // 
      }
  }

  appendPosts(16);

  $(window).scroll(function() {
      if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
          $('#loading').show();
          setTimeout(function() {
              appendPosts(11);
              $('#loading').hide();
          }, 500); 
      }
  });