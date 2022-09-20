<script setup lang="ts">
import type { DefaultTheme } from '..';
import VPIconHeart from './icons/VPIconHeart.vue';
import VPLink from './VPLink.vue';
import VPSocialLinks from './VPSocialLinks.vue';

defineProps<{
  size?: 'small' | 'medium';
  member: DefaultTheme.TeamMember;
}>();
</script>

<template>
  <article class="VPTeamMembersItem" :class="[size ?? 'medium']">
    <div class="profile">
      <figure class="avatar">
        <img class="avatar-img" :src="member.avatar" :alt="member.name" />
      </figure>
      <div class="data">
        <h1 class="name">
          {{ member.name }}
        </h1>
        <p v-if="member.title || member.org" class="affiliation">
          <span v-if="member.title" class="title">
            {{ member.title }}
          </span>
          <span v-if="member.title && member.org" class="at"> @ </span>
          <VPLink
            v-if="member.org"
            class="org"
            :class="{ link: member.orgLink }"
            :href="member.orgLink"
            no-icon
          >
            {{ member.org }}
          </VPLink>
        </p>
        <p v-if="member.desc" class="desc">
          {{ member.desc }}
        </p>
        <div v-if="member.links" class="links">
          <VPSocialLinks :links="member.links" />
        </div>
      </div>
    </div>
    <div v-if="member.sponsor" class="sponsor">
      <VPLink class="sponsor-link" :href="member.sponsor" no-icon>
        <VPIconHeart class="sponsor-icon" /> Sponsor
      </VPLink>
    </div>
  </article>
</template>

<style scoped>
.VPTeamMembersItem {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
}

.VPTeamMembersItem.small .profile {
  padding: 32px;
}

.VPTeamMembersItem.small .data {
  padding-top: 20px;
}

.VPTeamMembersItem.small .avatar {
  width: 64px;
  height: 64px;
}

.VPTeamMembersItem.small .name {
  font-size: 16px;
  line-height: 24px;
}

.VPTeamMembersItem.small .affiliation {
  padding-top: 4px;
  font-size: 14px;
  line-height: 20px;
}

.VPTeamMembersItem.small .desc {
  padding-top: 12px;
  font-size: 14px;
  line-height: 20px;
}

.VPTeamMembersItem.small .links {
  margin: 0 -16px -20px;
  padding: 10px 0 0;
}

.VPTeamMembersItem.medium .profile {
  padding: 48px 32px;
}

.VPTeamMembersItem.medium .data {
  padding-top: 24px;
  text-align: center;
}

.VPTeamMembersItem.medium .avatar {
  width: 96px;
  height: 96px;
}

.VPTeamMembersItem.medium .name {
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.15px;
}

.VPTeamMembersItem.medium .affiliation {
  padding-top: 4px;
  font-size: 16px;
}

.VPTeamMembersItem.medium .desc {
  max-width: 288px;
  padding-top: 16px;
  font-size: 16px;
}

.VPTeamMembersItem.medium .links {
  margin: 0 -16px -12px;
  padding: 16px 12px 0;
}

.profile {
  flex-grow: 1;
  background-color: var(--vp-c-bg-soft);
}

.data {
  text-align: center;
}

.avatar {
  position: relative;
  flex-shrink: 0;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: var(--vp-shadow-3);
}

.avatar-img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  object-fit: cover;
  border-radius: 50%;
}

.name {
  margin: 0;
  font-weight: 600;
}

.affiliation {
  margin: 0;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.org.link {
  color: var(--vp-c-text-2);
  transition: color 0.25s;
}

.org.link:hover {
  color: var(--vp-c-brand);
}

.desc {
  margin: 0 auto;
}

.links {
  display: flex;
  justify-content: center;
  height: 56px;
}

.sponsor-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  color: var(--vp-c-sponsor);
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  background-color: var(--vp-c-bg-soft);
  transition: color 0.25s, background-color 0.25s;
}

.sponsor-link:hover,
.sponsor-link:focus {
  color: var(--vp-c-text-dark-1);
  background-color: var(--vp-c-sponsor);
  outline: none;
}

.sponsor-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  fill: currentColor;
}
</style>
