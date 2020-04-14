const LanguageService = {
  getUsersLanguage(db, user_id) {
    return db
      .from('language')
      .select(
        'language.id',
        'language.name',
        'language.user_id',
        'language.head',
        'language.total_score',
      )
      .where('language.user_id', user_id)
      .first()
  },

  getLanguageWords(db, language_id) {
    return db
      .from('word')
      .select(
        'id',
        'language_id',
        'original',
        'translation',
        'next',
        'memory_value',
        'correct_count',
        'incorrect_count',
      )
      .where({ language_id })
  },

  getLanguageHead(db, id) {
    return db
      .from('language')
      .where('language.id', id)
      .join('word', 'language.head', '=', 'word.id')
      .select(
        'word.original',
        'word.translation',
        'word.correct_count',
        'word.incorrect_count',
        'language.total_score'
      )
      .first()
  }

}

module.exports = LanguageService
