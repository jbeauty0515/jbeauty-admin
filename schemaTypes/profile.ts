import {defineField, defineType} from 'sanity'

export const profile = defineType({
  name: 'profile',
  title: 'Company Profile Management',  
  type: 'document',
  fields: [
    // 회사명
    defineField({
      name: 'companyName',
      title: '会社名 / 회사명 / Company Name',
      type: 'string',
      description: 'JP: 合同会社 J-BEAUTY | KR: 합동회사 제이뷰티 | EN: J-BEAUTY LLC',
    }),

    // 대표자
    defineField({
      name: 'representative',
      title: '代表者 / 대표자 / Representative',
      type: 'string',
      description: 'JP: 氏名を記入してください (例: 鄭 柱洪)',
    }),

    // 설립일
    defineField({
      name: 'established',
      title: '設立 / 설립일 / Established',
      type: 'string',
      description: 'JP: 令和1年5月15日 | EN: May 15, 2019',
    }),

    // 자본금
    defineField({
      name: 'capital',
      title: '資本金 / 자본금 / Capital',
      type: 'string',
      description: 'JP: 500万円 | KR: 500만엔',
    }),

    // 전화번호
    defineField({
      name: 'phone',
      title: '電話番号 / 전화번호 / Phone Number',
      type: 'string',
      description: 'JP: 03-1234-5678 | KR: 031-123-4567',
    }),

    // 사업 내용
    defineField({
      name: 'business',
      title: '事業内容 / 사업 내용 / Business',
      type: 'text',
      rows: 4,
      description: 'JP: 事業内容를 입력하세요. 改行(Enter)が可能です。',
    }),

    // 취득 자격
    defineField({
      name: 'licenses',
      title: '取得資格 / 취득 자격 / Licenses',
      type: 'array',
      of: [{type: 'string'}],
      description: 'JP: 許可証番号を一つずつ追加してください。',
    }),

    // 본사 주소
    defineField({
      name: 'hq',
      title: '本社 / 본사 / HQ Address',
      type: 'object',
      fields: [
        {
          name: 'address',
          title: '住所 / 주소 / Address',
          type: 'string',
        },
        {
          name: 'mapLink',
          title: 'Google Map URL',
          type: 'url',
          description: 'Google Mapの共有リンクを貼り付けてください。',
        },
      ],
    }),

    // 창고 주소
    defineField({
      name: 'warehouse',
      title: '倉庫 / 창고 / Warehouse',
      type: 'object',
      fields: [
        {name: 'address', title: '住所 / 주소 / Address', type: 'string'},
        {name: 'mapLink', title: 'Google Map URL', type: 'url'},
      ],
    }),
  ],
})
