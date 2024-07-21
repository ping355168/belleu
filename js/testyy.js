*, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    margin: 10px;
    line-height: 1.2;
  }
  
  .container {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 1rem;
  }
  
  .item {
    border-radius: 0.5rem;
    &:nth-child(4n + 1) {
      background-color: #5B9BD5;
    }
    &:nth-child(4n + 2) {
      background-color: #ED7D31;
    }
    &:nth-child(4n + 3) {
      background-color: #FFC000;
    }
    &:nth-child(4n) {
      background-color: #70AD47;
    }
  }
  
  .content {
    padding: 1rem;
  }
  
  h3 {
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 10px;
  }