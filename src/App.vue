
  <template>
    <div class="center content-inputs">
      <vs-input v-model="value" placeholder="No" />
      <vs-button :active="active == 0" @click="active = 0">Active</vs-button>
    
    
    </div>
  </template>



<script>
export default {
  data: () => ({
    active: 0
  })
};
</script>

<style>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
