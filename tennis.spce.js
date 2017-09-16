describe('Tennis App' , () => {
  describe('Player A get score', () => {
    it('echo "Love - Love" when game starts' , () => {
      let app = new TennisApp()
      app.reset()
      let result = app.echo()

      expect(result).toBe('Love - Love')
    })
  })
}
