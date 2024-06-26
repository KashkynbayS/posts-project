<script setup>
import PageTemplate from '@/layouts/PageTemplate.vue'
import User from '@/assets/images/user.png'
import SegmentContainer from '@/components/SegmentControl.vue'
</script>

<template>
   <div class="green-field"></div>

   <PageTemplate>
      <template #header>
         <router-link to="" class="profile-header">Settings</router-link>
         <h2 id="login-h2" class="profile-header">Profile</h2>
         <router-link to="/sign-in" class="profile-header">Logout</router-link>
      </template>

      <div id="main-content">
         <div class="user-data">
            <div class="user-image">
               <img :src="User" alt="" />
            </div>
            <div class="user-name">
               <h2>Victoria Robertson</h2>
               <p>A mantra goes here</p>
            </div>
         </div>

         <SegmentContainer />

         <router-view></router-view>
      </div>
   </PageTemplate>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.green-field {
   position: absolute;
   width: 100%;
   height: 200px;
   background-color: $green;
   z-index: -1;
}

.profile-header {
   color: white;
}

#main-content {
   position: relative;
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 1.5rem;

   .user-data {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .user-image {
         display: flex;
         justify-content: center;

         img {
            width: 158px;
            height: 158px;
            border-radius: 50%;
            border: 5px solid white;
         }
      }

      .user-name {
         display: flex;
         flex-direction: column;
         text-align: center;
         gap: 0.5rem;

         p {
            font-size: 1rem;
            font-weight: 600;
         }
      }
   }
}
</style>
