<template>
  <div class="fab-wrapper">
    <span class="fab-button">
        <font-awesome-icon class="fa-lg" :icon="['fas', 'th-large']"/>
    </span>
    <ul class="fab-item-list">
      <li class="fab-item">
        <slot name="option1" />
      </li>
      <li class="fab-item">
        <slot name="option2" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    fabIcon: { type: String, required: false, default: '+' }
  }
}
</script>

<style scoped>
.fab-wrapper{
  position: fixed;
  right: 10px;
  bottom: 20px;
  z-index: 10000;
  display: flex;
  flex-direction: center;
  align-items: center;
}

  .fab-wrapper:hover .fab-item-list{
    bottom: 50px;
    opacity: 1;
    transition: 0.5s ease-in;
  }

.fab-button{
  width: 60px;
  height: 60px;
  background-color: gray;
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease-in-out;

}

  /* .fab-button:hover{
    opacity:1;
    transform: scale(1.25);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  } */
.fab-button{
  font-size: 30px;
  color:  #ffffff;
  text-align: center;
  line-height: 70px;
}

.fab-item-list{
  opacity: 0;
  width: 100%;
  position: absolute;
  padding: 0px;
  list-style: none;
  bottom: 0px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;
}

.fab-item{
  background:  gray;
  opacity: 1;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  text-align:center;
  color: white;
  margin-bottom: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease-in-out;

}
  .fab-item:hover{
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
  }
</style>
