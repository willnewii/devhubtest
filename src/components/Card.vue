<template>
  <div class="card">
    <div class="card_content">
      <div class="card_content-left title">Interior Lightning Service</div>
      <div class="card_content-right primary">Services description ></div>
    </div>
    <div class="card_content">
      <div class="card_content-left block1">
        <div class="card_content-block">
          <div class="sub_block">
            <span class="card_content-desc">Cantact Name:</span>
            <span class="card_content-value">Tom Bruce</span>
          </div>
          <div class="sub_block">
            <span class="card_content-desc">Cantact Number:</span>
            <span class="card_content-value">0488 888 888</span>
          </div>
        </div>
        <div class="card_content-desc">Service Address</div>
        <div class="card_content-value" style="padding-bottom: 10px;">12 West St. Canleg Vale NSW 2166</div>
        <div class="card_content-desc">Service Time</div>
        <div class="card_content-value">Morning 8AM-11AM, 11 December 2019</div>
      </div>
      <div class="card_content-right block2">
        <div class="primary">Full Refund</div>
        <div>Amount Paid</div>
        <div>$50</div>
        <div>Refunded</div>
        <div>$50</div>
      </div>
    </div>
    <div class="card_bottom">
      Booking Canceled
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  width: 500px;
  padding: 0 30px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 6px 2px #ccc;
  margin-bottom: 20px;
  .card_content {
    display: flex;
    flex-direction: row;
    padding: 15px 0;
    border-bottom: 1px #ccc solid;
    align-items: center;
    .card_content-left {
      width: 65%;
    }
    .card_content-right {
      width: 35%;
    }
    .card_content-desc {
      color: #909090;
      font-size: 12px;
    }
    .card_content-value {
      color: #909090;
      font-weight: bold;
    }
    .title {
      font-size: 18px;
      font-weight: bold;
    }

    .block1 {
      border-right: 1px #ccc solid;
    }
    .block2 {
      padding-left: 20px;
    }
    .card_content-block {
      display: flex;
      flex-direction: row;
      padding-bottom: 10px;
    }
    .sub_block {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
  }
  .card_bottom {
    text-align: right;
    border-top: 3px solid #ccc;
    padding-bottom: 15px;
  }
}
</style>
