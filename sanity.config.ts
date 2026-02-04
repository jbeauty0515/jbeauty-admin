import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'jbeauty-admin',

  projectId: 'mbj14vcv',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S: any) =>
        S.list()
          .title('J-BEAUTY 관리자')
          .items([
            // 1. 회사 정보 관리 (싱글톤 설정)
            S.listItem().title('Company Profile Management').id('profile').child(
              S.document().schemaType('profile').documentId('profile-singleton'), // 고정 ID를 부여합니다
            ),

            // 2. 나머지 스키마들이 자동으로 리스트에 나타나도록 설정
            ...S.documentTypeListItems().filter(
              (listItem: any) => !['profile'].includes(listItem.getId()!),
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
