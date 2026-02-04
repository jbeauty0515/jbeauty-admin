import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'news',
  title: 'News Management',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'タイトル / Title',
      type: 'string',
      description: 'ニュースのタイトルを入力してください。',
      validation: (Rule) => Rule.required().error('タイトルは必須項目です。'),
    }),

    defineField({
      name: 'publishedAt',
      title: '公開日 / Published Date',
      type: 'date',
      description: 'ウェブサイト上に表示される日付です。',
      validation: (Rule) => Rule.required().error('公開日を選択してください。'),
      initialValue: () => new Date().toISOString().split('T')[0],
    }),

    defineField({
      name: 'label',
      title: 'ラベル / Label',
      type: 'string',
      description: '記事の種類を選択してください。',
      options: {
        list: [
          {title: 'お知らせ', value: 'notice'},
          {title: '重要', value: 'important'},
          {title: 'イベント', value: 'event'},
        ],
        layout: 'radio',
      },
      initialValue: 'notice',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'isPinned',
      title: 'トップに固定 / Pin to Top',
      type: 'boolean',
      description: '有効にすると、リストの最上段に固定されます。',
      initialValue: false,
    }),

    defineField({
      name: 'excerpt',
      title: '抜粋 / Excerpt',
      type: 'text',
      rows: 2,
      description: '記事一覧画面でタイ토ルの下に表示される短い説明文です。',
    }),

    // 상세 본문 - 여기서 이미지 삽입을 모두 처리합니다.
    defineField({
      name: 'body',
      title: '本文 / Body Content',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          title: '画像 / Image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: '代替テキスト / Alternative Text',
              description: '画像の代わりの説明文（SEO/アクセシビリティ用）',
            },
          ],
        },
      ],
      description: 'ニュースの詳細内容を記入してください。画像もここから追加できます。',
      validation: (Rule) => Rule.required().error('本文を入力してください。'),
    }),

    defineField({
      name: 'isHidden',
      title: '非表示にする / Hide From Website',
      description: 'チェックを入れると、サイト上には表示されなくなります。',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      date: 'publishedAt',
      label: 'label',
      pinned: 'isPinned',
      // 본문의 첫 번째 이미지를 썸네일로 자동 선택하도록 설정 가능
      content: 'body',
    },
    prepare({title, date, label, pinned, content}) {
      const labels: Record<string, string> = {
        important: '🔴 重要',
        event: '🔵 이벤트',
        notice: '⚪ お知らせ',
      }
      // 본문 배열에서 첫 번째 이미지 객체를 찾아 썸네일로 사용
      const mainImage = content?.find((block: any) => block._type === 'image')

      return {
        title: `${pinned ? '📌 ' : ''}${title}`,
        subtitle: `${date || '日付未設定'} [${labels[label] || label}]`,
        media: mainImage,
      }
    },
  },
})
