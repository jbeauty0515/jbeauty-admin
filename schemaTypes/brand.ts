import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'brand',
  title: 'Brand Management',
  type: 'document',
  fields: [
    // 브랜드명(EN)
    defineField({
      name: 'name',
      title: 'ブランド名(EN) / 브랜드명(EN) / Brand Name (EN)',
      type: 'string',
      description: 'システム(URL等)で使用される英語名を記入してください。',
    }),

    // 브랜드명(JP)
    defineField({
      name: 'nameJa',
      title: 'ブランド名(JP) / 브랜드명(JP) / Brand Name (JP)',
      type: 'string',
      description: 'サイト上に表示される日本語のブランド名を記入してください。',
    }),

    // 카테고리
    defineField({
      name: 'category',
      title: 'カテゴリー / 카테고리 / Category',
      type: 'string',
      description: 'ブランドの該当カテゴリーを選択してください。',
      options: {
        list: [
          {title: 'Fragrance (フレグランス)', value: 'fragrance'},
          {title: 'Organic Cosmetics (オーガニックコスメ)', value: 'organic_cosmetics'},
          // {title: 'Skin Care (スキンケア)', value: 'skin_care'},
          // {title: 'Make Up (メイクアップ)', value: 'make_up'},
        ],
        layout: 'radio',
      },
    }),

    // 정렬 순서
    defineField({
      name: 'order',
      title: '表示順 / 정렬 순서 / Display Order',
      type: 'number',
      description: '数字が小さいほど先に表示されます (例: 1, 2, 3...)。',
      initialValue: 0,
    }),

    // 메인 이미지
    defineField({
      name: 'eyecatch',
      title: 'アイキャッチ画像 / 메인 이미지 / Eyecatch Image',
      type: 'image',
      description: 'ブランドのメイン画像。',
      options: {hotspot: true},
    }),

    // 상세 설명 (Rich Text)
    defineField({
      name: 'description',
      title: '詳細説明 / 상세 설명 / Description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'ブランドの紹介文を記入してください',
    }),
    defineField({
      name: 'hasPdf',
      title: 'PDFカタログの有無 / PDF 카탈로그 유무 / Has PDF Catalog',
      type: 'boolean',
      description: 'JP: カタログがある場合はONにしてください。',
      initialValue: false,
    }),
    // PDF 파일 업로드
    defineField({
      name: 'pdf',
      title: '商品カタログPDF / 제품 PDF / Product PDF',
      type: 'file',
      description: '商品のカタログや紹介用PDFをアップロードしてください。',
      hidden: ({document}) => !document?.hasPdf,
    }),

    // PDF 버튼 라벨
    defineField({
      name: 'pdfLabel',
      title: 'PDFボタン名 / PDF 버튼 문구 / PDF Button Label',
      type: 'string',
      initialValue: 'Download PDF',
      description: 'ダウンロードボタンに表示されるテキスト (例: Download PDF)。',
      hidden: ({document}) => !document?.hasPdf,
    }),
  ],
})
