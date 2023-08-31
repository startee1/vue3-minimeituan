<template>
  <div class="list">
    <div class="business flex">
      <div class="image"></div>
      <div class="main">
        <div class="name">
          巴拉巴拉
        </div>
        <div class="info1 flex flex-jc-sb">
          <div class="info1-left flex">
            <div class="score">4.5分</div>
            <div class="sellcount">月售4000+</div>
            <div class="priceavr">人均￥30</div>
          </div>
          <div class="info1-right">
            <div class="delivery">美团专送</div>
          </div>
        </div>
        <div class="info2 flex flex-jc-sb">
          <div class="info2-left flex">
            <div class="startmoney">起送 Y0</div>
            <div class="deliverymoney">配送 越Y01</div>
          </div>
          <div class="info2-right flex">
            <div class="deliverytime">160分钟</div>
            <div class="distance">12.32km</div>
          </div>
        </div>
        <div class="info3">
          <div class="rank-icon">本地排行第5名</div>
        </div>
        <div class="info4">
          <div class="info4-left">
            <div class="discounts">
              <span>3.6折</span><span>满10-5</span>
            </div>
          </div>
          <div class="info4-right">
            <div class="discounts-more"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.business {
  margin: 5px 10px;
  background-color: #fff;
  border-radius: 5px;
  height: 110px;
  box-sizing: border-box;
  padding: 10px;
  line-height: 1;
  font-size: 10px;
  color: #999;
  .image {
    width: 90px;
    height: 90px;
    background-color: #999;
    margin-right: 10px;
    border-radius: 5px;
    overflow: hidden;
  }
  .main {
    flex: 1;
    .name {
      font-size: 16px;
      font-weight: 800;
      color: #333;
    }
    .info1 {
      .info1-left {
        margin-top: 3px;
        font-size: 10px;
        flex: 1;
        .score {
          font-size: 14px;
          color: rgb(255,128,0);
        }
        &>div{
          margin-right: 5px;
        }
      }
      .info1-right {
        .delivery {
          color: rgb(255,128,0);
          font-size: 6px;
          border: 1px solid rgb(255,128,0);
          padding: 2px;
          border-radius: 5px;
        }
      }
    }
    .info2 {
      margin-top: 3px;
      .info2-left {
        font-size: 10px;
        &>div{
          margin-right: 5px;
        }
      }
      .info2-right {
        &>div{
          margin-left: 5px;
        }
      }
    }
    .info3 {
      .rank-icon {
        display: inline-block;
        background-color: rgb(251,245,232);
        color: rgb(193, 144, 39);
        padding: 5px 10px;
        font-weight: 600;
        border-radius: 4px;
        margin: 2px 0;
      }
    }
    .info4 {
      margin-top: 3px;
      .discounts {
        & span {
          color: rgb(254, 29, 29);
          border: 1px solid rgb(255, 17, 17);
          margin-right: 5px;
          border-radius: 3px;
          padding: 0 3px;
        }
      }
    }
  }
}
</style>