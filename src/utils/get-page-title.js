import defaultSettings from '@/settings'

const title = defaultSettings.title || 'ZJU ACES ISE'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
