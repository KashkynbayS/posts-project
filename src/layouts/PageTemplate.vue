<template>
   <div class="page-template">
      <div class="page-template__container">
         <div class="page-template__header">
            <slot v-if="$slots.header" name="header" />
         </div>

         <div class="page-template__main">
            <slot />
         </div>
      </div>
      <div v-if="$slots.footer" class="page-template__footer">
         <slot name="footer" />
      </div>
   </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';

.page-template {
   height: 100dvh;

   .page-template__container {
      display: flex;
      flex-direction: column;
      height: 100dvh;
      padding: 1rem 1rem 0 1rem;
   }

   &__header {
      display: flex;
      justify-content: center;
      align-items: center;
   }

   &__header > * {
      flex: 1;
   }

   &__header > :nth-child(1) {
      text-align: left;
      font-size: 1rem;
      font-weight: 500;
   }

   &__header > :nth-child(2) {
      text-align: center;
   }

   &__header > :nth-child(3) {
      text-align: right;
      font-size: 1rem;
      font-weight: 500;
   }

   &__main {
      overflow-y: auto;
      overflow-x: hidden;
      width: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2rem 0 0 0;
   }

   &__footer {
      position: absolute;
      bottom: 0;
      background-color: $gray-fa;
      padding: var(--space-4);
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
      width: 100%;
   }
}
</style>
