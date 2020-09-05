$(function(){

  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="message-box">
          <div class="message-info">
            <div class="user-name">
              ${message.user_name}
            </div>
            <div class="created_at">
              ${message.created_at}
            </div>
          </div>
          <div class="message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="message-box">
        <div class="message-info">
          <div class="user-name">
            ${message.user_name}
          </div>
          <div class="created_at">
            ${message.created_at}
          </div>
        </div>
        <div class="message">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $(".form-box").on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.message-field').append(html)
      $('form')[0].reset();
      $('.message-field').animate({ scrollTop: $('.message-field')[0].scrollHeight});
      // メッセージを送信したとき、メッセージ画面を最下部にスクロールする
      $('.send-btn').prop('disabled', false);
      // 連続で送信ボタンを押せる
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  })
})