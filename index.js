const getD2BuffInfo = id => axios.get(`https://ru.dotabuff.com/players/${id}`).then(response => {
  if (response.status === 200) {
    let html = response.data
    let $ = cheerio.load(html)

    return info = {
      URL: `https://ru.dotabuff.com/players/${id}`,
      avatar: $('.image-player').attr('src'),
      nickname: $('.header-content-title h1').text().replace(/Обзор/g, ''),
      rank: $(".rank-tier-wrapper .leaderboard-rank-value").text(),
      rankLogo: $('.rank-tier-base').attr('src'),
      lastgame: $('.header-content-secondary dl:first-child time').text(),
      rate: {
        single: parseInt($(".header-content-secondary dl:nth-child(2)").text()),
        group: parseInt($(".header-content-secondary dl:nth-child(3)").text())
      },
      matches: {
        wins: $('.game-record .wins').text(),
        losses: $('.game-record .losses').text(),
        abandons: $('.game-record .abandons').text(),
        winRate: $('.header-content-secondary dl:last-of-type dd').text()
      },
      lastResults: $('.performances-overview').find('.won, .lost').text().replace(/Поражение/g, '☠️').replace(/Победа/g, '🏆')
    }
  }
}).catch(console.error)
