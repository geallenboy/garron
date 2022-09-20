<template>
  <button class="VPSwitch" type="button" role="switch">
    <span class="check">
      <span class="icon" v-if="$slots.default">
        <slot />
      </span>
    </span>
  </button>
</template>

<style scoped>
.VPSwitch {
  position: relative;
  display: block;
  flex-shrink: 0;
  width: 40px;
  height: 22px;
  background-color: var(--vp-c-bg-mute);
  border: 1px solid var(--vp-c-divider);
  border-radius: 11px;
  transition: border-color 0.25s, background-color 0.25s;
}

.VPSwitch:hover {
  border-color: var(--vp-c-gray);
}

.check {
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  background-color: var(--vp-c-white);
  border-radius: 50%;
  box-shadow: var(--vp-shadow-1);
  transition: background-color 0.25s, transform 0.25s;
}

.dark .check {
  background-color: var(--vp-c-black);
}

.icon {
  position: relative;
  display: block;
  width: 18px;
  height: 18px;
  overflow: hidden;
  border-radius: 50%;
}

.icon :deep(svg) {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 12px;
  height: 12px;
  fill: var(--vp-c-text-2);
}

.dark .icon :deep(svg) {
  transition: opacity 0.25s;
  fill: var(--vp-c-text-1);
}
</style>
