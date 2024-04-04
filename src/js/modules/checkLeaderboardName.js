const checkLeaderboardName = () => {
  const list = document.querySelector('.leaderboard-list'),
  listNames = list.querySelectorAll('.leaderboard-list-item__name');
  listNames.forEach(name => {
    const text = name.querySelector('.name'),
    textW = text.offsetWidth,
    textRW = text.scrollWidth;
    if(textW<textRW) {
      name.setAttribute('data-name', text.textContent)
      name.classList.add('overflow');
      console.log(textW, textRW)
    }
  })
}

export default checkLeaderboardName;
